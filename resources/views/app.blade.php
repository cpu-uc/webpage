<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="description"
        content='La Página web de CPU ya esta aquí, se parte de una de las iniciativas estudiantiles más grandes de ingeniería en la Pontificia Universidad Católica de Chile.'>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
    <!-- Icono de la página web -->
    <link rel="icon" type="image/png" href="{{ Vite::asset('resources/assets/cpulogocolor.png') }}">
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
