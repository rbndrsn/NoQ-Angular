function NoqCtrl($scope) {
  $scope.members = [
  ];
 
  $scope.addMember = function() {
    $scope.members.push({text:$scope.memberText, email:$scope.memberEmail, mobile:$scope.memberMobile, done:false});
    $scope.memberText = '';
    $scope.memberEmail = '';
    $scope.memberMobile = '';

  };
 
  // $scope.remaining = function() {
  //   var count = 0;
  //   angular.forEach($scope.members, function(member) {
  //     count += member.done ? 0 : 1;
  //   });
  //   return count;
  // };
 
  $scope.archive = function() {
    var oldMembers = $scope.members;
    $scope.members = [];
    angular.forEach(oldMembers, function(member) {
      if (!member.done) $scope.members.push(member);
    });
  };
}