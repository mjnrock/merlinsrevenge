<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Merlin's Revenge</title>
        
        <link rel="shortcut icon" href="/assets/media/images/favicon.ico" />
        
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        
        <script src="assets/js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
        
        <script src="core/Utility/Helper.js" type="text/javascript"></script>
        <script src="core/Utility/UUID.js" type="text/javascript"></script>
        <script src="core/Utility/Color.js" type="text/javascript"></script>
        <script src="core/Utility/List.js" type="text/javascript"></script>
        <script src="core/Utility/HashMap.js" type="text/javascript"></script>
        <script src="core/Utility/Grid.js" type="text/javascript"></script>
        
        <script src="core/Event/Player.js" type="text/javascript"></script>
        
        <script src="core/Render/Model/Base.js" type="text/javascript"></script>
        <script src="core/Render/Manager.js" type="text/javascript"></script>
        
        <script src="core/Game/RenderHandler.js" type="text/javascript"></script>
        <script src="core/Game/Loop.js" type="text/javascript"></script>        
        <script src="core/Game/Game.js" type="text/javascript"></script>
    </head>
    <body>
        <canvas id="stage">
            
        </canvas>
        
        <script>
            $(document).ready(function() {
                /*Game.Manager.Render = new Render.Manager();
                /*var canvas = document.getElementById("stage");
                var ctx = canvas.getContext("2d");*/
            });
        </script>
        
        <script src="core/init.js" type="text/javascript"></script>
    </body>
</html>
