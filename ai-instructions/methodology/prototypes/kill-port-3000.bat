@echo off
echo.
echo ========================================
echo  Kill Process on Port 3000
echo ========================================
echo.

echo Finding process on port 3000...
echo.

set FOUND=0
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    set FOUND=1
    echo Found PID: %%a
    echo.
    netstat -ano | findstr :3000
    echo.
    echo Killing process %%a...
    taskkill /F /PID %%a
    echo.
)

if %FOUND%==0 (
    echo No process found listening on port 3000
)

echo.
echo Done!
pause
