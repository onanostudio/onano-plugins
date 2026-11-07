@echo off
rem Starts Onano Studio's MCP server for Claude Code or Codex.
rem
rem The server ships inside Onano Studio (OnanoMcp.exe, a small bridge that
rem starts the engine), so this only finds where Studio was installed and hands
rem over. cmd, not PowerShell: MCP talks over stdin and stdout, and cmd passes
rem both straight to the exe where PowerShell can re-encode them. Nothing may
rem be printed to stdout here -- it is the protocol channel. Errors go to stderr.
setlocal

if defined ONANO_MCP if exist "%ONANO_MCP%" (
  "%ONANO_MCP%" %*
  exit /b %ERRORLEVEL%
)

for %%D in (
  "%LOCALAPPDATA%\Onano Studio"
  "%LOCALAPPDATA%\Programs\Onano Studio"
  "%ProgramFiles%\Onano Studio"
) do (
  if exist "%%~D\OnanoMcp.exe" (
    "%%~D\OnanoMcp.exe" %*
    exit /b %ERRORLEVEL%
  )
)

>&2 echo Onano Studio is not installed on this computer, so its editing tools are not available.
>&2 echo Download it free from https://onano.app/download , open it once, then restart Claude Code or Codex.
exit /b 1
