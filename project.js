var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Project = /** @class */ (function () {
    function Project(pid) {
        this.pid = pid;
    }
    return Project;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(pid, uid, experience) {
        var _this = _super.call(this, pid) || this;
        _this.uid = uid;
        _this.experience = experience;
        return _this;
    }
    User.prototype.getUserDetails = function () {
        return {
            pid: this.pid,
            uid: this.uid,
            experience: this.experience
        };
    };
    User.prototype.getExperiencedUser = function () {
        if (this.experience > 7)
            return this.getUserDetails();
        else
            return "";
    };
    return User;
}(Project));
var u1 = new User('P01', 'U01', 10);
var u2 = new User('P01', 'U02', 8);
var u3 = new User('P01', 'U03', 7);
var u4 = new User('P02', 'U02', 6);
var u5 = new User('P02', 'U02', 8);
var u6 = new User('P02', 'U03', 3);
console.log(u1.getExperiencedUser());
console.log(u2.getExperiencedUser());
console.log(u3.getExperiencedUser());
console.log(u4.getExperiencedUser());
console.log(u5.getExperiencedUser());
console.log(u6.getExperiencedUser());
