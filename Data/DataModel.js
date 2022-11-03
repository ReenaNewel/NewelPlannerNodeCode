var connect = require("./Connect");

var sequelize = connect.sequelize;
var Sequelize = connect.Sequelize;
const Model = connect.Sequelize.Model;

// Log Tables
class ErrorLog extends Model { }
class MailLog extends Model { }

//class CronService extends Model { }
class tbl_master_holiday extends Model{}
class tbl_master_clientmaster extends Model{}
class tbl_general_master extends Model{}
class tbl_project_stage_details extends Model{}
class tbl_master_project extends Model{}
class tbl_master_userdetails extends Model{}
class tbl_task_details extends Model{}
class tbl_task_assignee_details extends Model{}
class tbl_timesheet_details extends Model{}


module.exports.tbl_timesheet_details = function () {
    tbl_timesheet_details.init({
   

    id :{ type: Sequelize.INTEGER,primaryKey:true,autoIncrement:true, allowNull: false },
    projectid :{ type: Sequelize.INTEGER, allowNull: true },
    taskid :{ type: Sequelize.INTEGER, allowNull: true },
    description: { type: Sequelize.STRING(500), allowNull: true },
    timeinhours: { type: Sequelize.SMALLINT, allowNull: true },
    timeinminutes : { type: Sequelize.SMALLINT, allowNull: true },
    date: { type: Sequelize.DATE, allowNull: true },
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true },
    activityid :{ type: Sequelize.INTEGER, allowNull: true },
    created_date: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    created_by : { type: Sequelize.INTEGER, allowNull: true },
    modified_date : { type: Sequelize.DATE, allowNull: true },
    modified_by : { type: Sequelize.INTEGER, allowNull: true },
 

    }, {
        sequelize,
        modelName: 'tbl_timesheet_details',
        tableName: 'tbl_timesheet_details'
    });

    return tbl_timesheet_details;
}



module.exports.tbl_master_holiday = function () {
    tbl_master_holiday.init({
    id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    holiday_id:{ type: Sequelize.INTEGER, allowNull: true },
    description :{ type: Sequelize.STRING(100), allowNull: false},
    holiday_date:{ type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true }

    }, {
        sequelize,
        modelName: 'tbl_master_holiday',
        tableName: 'tbl_master_holiday'
    });

    return tbl_master_holiday;
}

module.exports.tbl_master_clientmaster = function () {
    tbl_master_clientmaster.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    name:{ type: Sequelize.STRING(200), allowNull: false },
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true }

    }, {
        sequelize,
        modelName: 'tbl_master_clientmaster',
        tableName: 'tbl_master_clientmaster'
    });

    return tbl_master_clientmaster;
}

module.exports.tbl_general_master = function () {
    tbl_general_master.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    groupname:{ type: Sequelize.STRING, allowNull: true },
    name:{ type: Sequelize.STRING, allowNull: true },
    typeid:{ type: Sequelize.INTEGER, allowNull: true },
    seqorder:{ type: Sequelize.INTEGER, allowNull: true },
    parentid:{ type: Sequelize.INTEGER, allowNull: true },
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true }

    }, {
        sequelize,
        modelName: 'tbl_general_master',
        tableName: 'tbl_general_master'
    });

    return tbl_general_master;
}

module.exports.tbl_project_stage_details = function () {
    tbl_project_stage_details.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    projectid:{ type: Sequelize.INTEGER, allowNull: true },
    stageid:{ type: Sequelize.INTEGER, allowNull: true },
    planned_startdate:{ type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW },
    planned_enddate:{ type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW},
    actual_startdate:{ type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    actual_enddate:{ type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    status:{ type: Sequelize.STRING(40), allowNull: true },
    remarks:{  type: Sequelize.STRING(40), allowNull: true },
    created_date:{ type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW},
    created_by:{ type: Sequelize.INTEGER, allowNull: true },
    modified_date: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    modified_by :{ type: Sequelize.INTEGER, allowNull: true },
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true }

    }, {
        sequelize,
        modelName: 'tbl_project_stage_details',
        tableName: 'tbl_project_stage_details'
    });

    return tbl_project_stage_details;
}

module.exports.tbl_master_project = function () {
    tbl_master_project.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    name:{type: Sequelize.STRING(200), allowNull: false},
    activity:{type: Sequelize.STRING(500), allowNull: true},
    clientid:{type:Sequelize.INTEGER, allowNull: false},
    fromdate:{type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW},
    todate:{type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW},
    owner:{ type: Sequelize.STRING(100), allowNull: true },
    // remarks:{type: Sequelize.STRING(40), allowNull: true },
    created_date:{ type: Sequelize.DATE, allowNull: true , defaultValue: Sequelize.NOW},
    created_by:{ type: Sequelize.INTEGER, allowNull: true },
    modified_date: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    modified_by :{ type: Sequelize.INTEGER, allowNull: true },
    isactive:{type: Sequelize.BOOLEAN, defaultValue: true },
    projecttype:{type: Sequelize.INTEGER, allowNull: true },
    plannedeffort:{type: Sequelize.DECIMAL, allowNull: true },
    projectstage:{type: Sequelize.INTEGER, allowNull: true },
    stagestatus:{type: Sequelize.INTEGER, allowNull: true },
    projectstatus:{type: Sequelize.INTEGER, allowNull: true }

    }, {
        sequelize,
        modelName: 'tbl_master_project',
        tableName: 'tbl_master_project'
    });

    return tbl_master_project;
}

module.exports.tbl_master_userdetails = function () {
    tbl_master_userdetails.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    name:{ type: Sequelize.STRING(200), allowNull: true},
    emailid:{ type: Sequelize.STRING(200), allowNull: true},
    password:{ type: Sequelize.STRING(20), allowNull: true},
    defaultroleid:{ type: Sequelize.INTEGER, allowNull: true},
    created_date:{ type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW},
    created_by:{ type: Sequelize.INTEGER, allowNull: true},
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true}

    }, {
        sequelize,
        modelName: 'tbl_master_userdetails',
        tableName: 'tbl_master_userdetails'
    });

    return tbl_master_userdetails;
}

// Ashlesha 
module.exports.tbl_task_details = function () {
    tbl_task_details.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    projectid:{ type: Sequelize.INTEGER, allowNull: true},
    taskname:{ type: Sequelize.STRING(200), allowNull: true},
    taskdescription:{ type: Sequelize.STRING(200), allowNull: true},
    tasktypeid:{ type: Sequelize.INTEGER, allowNull: true},
    efforts:{ type: Sequelize.NUMBER, allowNull: true},
    startdate:{ type: Sequelize.DATE, allowNull: true},
    enddate:{ type: Sequelize.DATE, allowNull: true},
    attachment:{ type: Sequelize.STRING, allowNull: true},
    comments:{ type: Sequelize.STRING, allowNull: true},
    attachment:{ type: Sequelize.STRING, allowNull: true},
    created_date:{ type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW},
    created_by:{ type: Sequelize.INTEGER, allowNull: true},
    modified_date:{ type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW},
    modified_by:{ type: Sequelize.INTEGER, allowNull: true},
    status:{ type: Sequelize.INTEGER, allowNull: true},
    isactive:{  type: Sequelize.BOOLEAN, defaultValue: true}

    }, {
        sequelize,
        modelName: 'tbl_task_details',
        tableName: 'tbl_task_details'
    });

    return tbl_task_details;
}
// Ashlesha 
module.exports.tbl_task_assignee_details = function () {
    tbl_task_assignee_details.init({
    id:{type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true,allowNull: false },
    taskid:{ type: Sequelize.INTEGER, allowNull: true},
    userid:{ type: Sequelize.INTEGER, allowNull: true},
    isactive:{ type: Sequelize.INTEGER, allowNull: true},
    }, {
        sequelize,
        modelName: 'tbl_task_assignee_details',
        tableName: 'tbl_task_assignee_details'
    });

    return tbl_task_assignee_details;
}
