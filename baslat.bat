@echo off
setlocal
cd /d "%~dp0"

echo Dugun Platformu aciliyor...
echo.
echo Bu pencere acik kalabilir. Kapatirsan site yine tarayicida durur,
echo ama yenilemede sorun olursa dosyayi tekrar baslatman yeterli.
echo.

start "" "%~dp0index.html"
