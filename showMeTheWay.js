function showMeTheWay(route) {
    const squares = document.querySelectorAll(".square"); //Make it in all js files so need to figuraute something more efistikatet for that
    route.pop();

        // route.forEach(i => {
        //     setTimeout(() => {squares[i].id = "way"}, 500)
        // });

        for(let i=0; i<route.length; i++){
            setTimeout(() => {
                squares[route[i]].id = "way";
            }, i*50)            
        };
}