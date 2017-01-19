/**
 * Created by Wan on 2017/1/18.
 */
(function (ag, window) {
    var main = ag.module("mainModel", []);
    /*引用第三方数组，由于没有第三方，所以必须加[]*/
    main.controller("mainController",
        ["$scope", "$interval","$rootScope"
            , function ($scope, $interval,$rootScope) {/*依赖注入*/
            $rootScope.basisMsg="I'm root";
            $scope.obj={
                name:"I'm mgModel+花括号"
            };
            $scope.$watch("output",function (old,new1){
                $scope.$broadcast("broad-test","broad-message");
            });
            $scope.now = "";
            $interval(function () {
                var nn = new Date();
                $scope.now = nn.getMinutes()
                    + "," + nn.getSeconds();
            }, 1000);

            $scope.students = ["陈益民", "张扬杨", "曾俊杰"];

            $scope.teacher = [{
                name: "戴老师",
                gender: "男",
                occupation: "CEO",
                special: "帅"
            },
                {
                    name: "邹老师",
                    gender: "男",
                    occupation: "team-leader",
                    special: "cute"
                },
                {
                    name: "向老师",
                    gender: "女",
                    occupation: "manager",
                    special: "beautiful"
                }
            ];
        }]);
    main.controller("childController",//controller可以嵌套,由HTML元素关系决定
        ["$scope","$rootScope",function ($scope,$rootScope) {//子controller的scope会继承父controller的scope
            // alert($scope.teacher.length);
            // alert($rootScope.basisMsg);
            $scope.$on("broad-test",function (event,param) {
                alert(param);
            });
            $scope.$emit("emit-test","emit-message!");
        }]);
})(angular, window);
