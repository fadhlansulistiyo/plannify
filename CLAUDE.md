# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Plannify**, a Laravel 12 application using:
- PHP 8.2+
- Laravel Framework 12.0
- Laravel Breeze for authentication
- Tailwind CSS 4.0 for styling
- Vite for asset bundling
- SQLite database (database.sqlite)

## Development Commands

### Starting Development
```bash
composer dev
```
This single command starts all development services concurrently:
- Laravel development server (`php artisan serve`)
- Queue worker (`php artisan queue:listen --tries=1`)
- Log viewer (`php artisan pail --timeout=0`)
- Vite development server (`npm run dev`)

### Individual Commands
- **Laravel server**: `php artisan serve`
- **Frontend development**: `npm run dev`
- **Frontend build**: `npm run build`
- **Run tests**: `composer test` (clears config and runs `php artisan test`)
- **Code formatting**: `vendor/bin/pint` (Laravel Pint)

### Artisan Commands
- **Generate application key**: `php artisan key:generate`
- **Run migrations**: `php artisan migrate`
- **Clear config cache**: `php artisan config:clear`
- **Interactive shell**: `php artisan tinker`

## Architecture

### Directory Structure
- `app/` - Application logic (Models, Controllers, Providers)
- `resources/` - Frontend assets and Blade views
  - `resources/js/` - JavaScript files (app.js, bootstrap.js)
  - `resources/css/` - Stylesheets (app.css with Tailwind)
  - `resources/views/` - Blade templates
- `routes/` - Route definitions (web.php, console.php)
- `database/` - Migrations, seeders, factories, and SQLite database file
- `tests/` - PHPUnit tests (Unit and Feature directories)

### Key Technologies
- **Backend**: Laravel 12 with standard MVC architecture
- **Database**: SQLite (database.sqlite file)
- **Frontend**: Blade templates with Tailwind CSS 4.0
- **Build Tool**: Vite with Laravel plugin
- **Testing**: PHPUnit with in-memory SQLite for tests
- **Code Style**: Laravel Pint for PHP formatting

### Authentication
Laravel Breeze is installed for authentication scaffolding.

## Testing

Tests use PHPUnit with in-memory SQLite database. Test environment is configured in phpunit.xml with specific environment variables for testing isolation.