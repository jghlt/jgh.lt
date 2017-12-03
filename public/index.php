<?php


// * require dependencies
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


// * load dependenciess
require '../vendor/autoload.php';


// * setup ..
$container = new \Slim\Container;
$container['view'] = new \Slim\Views\PhpRenderer('./views/');
$container['notFoundHandler'] = function ($container) {
    return function ($request, $response) use ($container) {
        return $container['view']->render($response->withStatus(404), '404.html', []);
    };
};


// * app
$app = new \Slim\App($container);


// * routes
$app->get('/', function (Request $request, Response $response, $args) {

    $response = $this->view->render($response, 'index.html', $args);
    return $response;

});


// * run
$app->run();
