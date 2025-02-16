@echo off

REM Set the root directory name
set "rootDir=portfolio-website"

REM Create the root directory
mkdir "%rootDir%"
if errorlevel 1 (
    echo Failed to create root directory "%rootDir%"
    exit /b 1
)

REM Navigate into the root directory
cd "%rootDir%"
if errorlevel 1 (
    echo Failed to navigate into root directory "%rootDir%"
    exit /b 1
)

echo Created root directory "%rootDir%" and navigated into it.

REM Create subdirectories
mkdir css
if errorlevel 1 echo Failed to create css directory
mkdir js
if errorlevel 1 echo Failed to create js directory
mkdir js\components
if errorlevel 1 echo Failed to create js\components directory
mkdir js\sections
if errorlevel 1 echo Failed to create js\sections directory
mkdir js\spa
if errorlevel 1 echo Failed to create js\spa directory
mkdir js\utils
if errorlevel 1 echo Failed to create js\utils directory
mkdir data
if errorlevel 1 echo Failed to create data directory
mkdir files
if errorlevel 1 echo Failed to create files directory

echo Created subdirectories.

REM Create empty files
type nul > css\styles.css
if errorlevel 1 echo Failed to create css\styles.css
type nul > js\script.js
if errorlevel 1 echo Failed to create js\script.js
type nul > js\sections\Section.js
if errorlevel 1 echo Failed to create js\sections\Section.js
type nul > js\sections\LandingSection.js
if errorlevel 1 echo Failed to create js\sections\LandingSection.js
type nul > js\sections\SummarySection.js
if errorlevel 1 echo Failed to create js\sections\SummarySection.js
type nul > js\sections\EducationSection.js
if errorlevel 1 echo Failed to create js\sections\EducationSection.js
type nul > js\sections\WorkSection.js
if errorlevel 1 echo Failed to create js\sections\WorkSection.js
type nul > js\sections\VolunteeringSection.js
if errorlevel 1 echo Failed to create js\sections\VolunteeringSection.js
type nul > js\sections\ProjectsSection.js
if errorlevel 1 echo Failed to create js\sections\ProjectsSection.js
type nul > js\sections\SkillsSection.js
if errorlevel 1 echo Failed to create js\sections\SkillsSection.js
type nul > js\sections\AwardsSection.js
if errorlevel 1 echo Failed to create js\sections\AwardsSection.js
type nul > js\sections\CertificationsSection.js
if errorlevel 1 echo Failed to create js\sections\CertificationsSection.js
type nul > js\spa\spa.js
if errorlevel 1 echo Failed to create js\spa\spa.js
type nul > data\data.js
if errorlevel 1 echo Failed to create data\data.js
type nul > files\Divya_Upadhyay_Resume.pdf
if errorlevel 1 echo Failed to create files\Divya_Upadhyay_Resume.pdf
type nul > index.html
if errorlevel 1 echo Failed to create index.html

echo Created empty files.

echo Structure creation complete within "%rootDir%" directory.
pause