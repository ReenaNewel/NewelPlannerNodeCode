var express = require('express');
var router = express.Router();
var connect = require('../../Data/Connect');
var datamodel = require('../../Data/DataModel');
var dataaccess = require('../../Data/DataAccess');
var dataconn = require('../../Data/DataConnection');
// var mailer = require('../../Common/Mailer'); 
var commonfunc = require('../../Common/CommonFunctions');

var routes = function () {

    router.route('/GetAllTimeSheetDetails')
        .post(function (req, res) {
            
            try {
                let user= req.body;
            var querytext = `SELECT "GetallTimesheet"('${user.userid}',:p_ref); FETCH ALL IN "abc"`;
console.log("querytext",querytext);
            var param = {
                replacements: {
                    p_active: true,
                    p_ref: 'abc'
                },
                type: connect.sequelize.QueryTypes.SELECT
            }
            connect.sequelize
            .query(querytext,param)
            .then(function (result) {
                console.log("result",result);
                result.shift();
                res.status(200).json({

                    Success: true,
                    Message: "Get all timesheet Details successfully",
                    Data: result
                });
            }, function (err) {
                console.log(err);
                // dataconn.ARC_Errorlogger('homepageService', 'getConfirmDetails', err);
                res.status(200).json({ Success: false, Message: ' timesheet Mastertable API failed.', Data: null });
            });
        }catch(err)    {
            res.status(200).json({ Success: false, Message: ' timesheet Master table API failed.', Data: null });
        } 
});


router.route('/GetTimesheetProject')
.post(function (req, res) {
    
    try {
        let user= req.body;
   
    var querytext = `SELECT "GetTimesheetProject"('${user.userid}',:p_ref); FETCH ALL IN "abc"`;
console.log("querytext",querytext);
    var param = {
        replacements: {
            p_active: true,
            p_ref: 'abc'
        },
        type: connect.sequelize.QueryTypes.SELECT
    }
    connect.sequelize
    .query(querytext,param)
    .then(function (result) {
        console.log("result",result);
        result.shift();
        res.status(200).json({

            Success: true,
            Message: "Get all timesheet Details successfully",
            Data: result
        });
    }, function (err) {
        console.log(err);
        // dataconn.ARC_Errorlogger('homepageService', 'getConfirmDetails', err);
        res.status(200).json({ Success: false, Message: ' timesheet Mastertable API failed.', Data: null });
    });
}catch(err)    {
    res.status(200).json({ Success: false, Message: ' timesheet Master table API failed.', Data: null });
} 
});

router.route("/CreateTimesheet").post(function(req, res) {
    const timesheet = datamodel.tbl_timesheet_details();
    var values = {
       
        projectid :req.body.projectid,
        taskid :req.body.taskid,
        description:req.body.description,
        timeinhours:req.body.timeinhours ,
        timeinminutes : req.body.timeinminutes,
        date:req.body.date ,
        isactive:req.body.isactive,
        activityid :req.body.activityid,
        created_date:req.body.created_date ,
        created_by :req.body.created_by ,
        modified_date :req.body.modified_date ,
        modified_by : req.body.modified_by,
    };
    dataaccess.Create(timesheet, values).then(
        function(result) {
            if (result != null) {
                res
                    .status(200)
                    .json({
                        Success: true,
                        Message: "timesheet saved successfully",
                        Data: result,
                    });
            } else {
                dataconn.errorlogger("timesheetService", "Createtimesheet", {
                    message: "No object found",
                    stack: "",
                });
                res
                    .status(200)
                    .json({
                        Success: false,
                        Message: "Error occurred while saving record",
                        Data: null,
                    });
            }
        },
        function(err) {
            dataconn.errorlogger("timesheetService", "Createtimesheet", err);
            res
                .status(200)
                .json({
                    Success: false,
                    Message: "Error occurred while saving record",
                    Data: null,
                });
        }
    );
});

router.route('/UpdateTimesheet')
.post(function (req, res) {
    try {
    const TimesheetDetails = datamodel.tbl_timesheet_details();
    //check once which id takes here
    var param = {
            id : req.body.projectid
        }
 
        var param1 = {
            where:{
            id : req.body.projectid
            }
        }
     var values = {
        projectid:req.body.projectid,
        taskid:req.body.taskid,
        description:req.body.description,
        timeinhours:req.body.timeinhours,
        timeinminutes:req.body.timeinminutes,
        date:req.body.date,
        isactive:req.body.isactive,
        created_date:req.body.created_date,
        created_by:req.body.created_by,
        modified_date: req.body.modified_date,
        modified_by:req.body.modified_by,
        isactive:req.body.isactive,
        activityid:req.body.activityid
    }
    dataaccess.FindOne(TimesheetDetails, param1)
    .then(function (result) {
        console.log(result)
        if (result != null) {

        dataaccess.Update(TimesheetDetails, values,param)
        .then(function (result) {
        if (result != null) {
            return res.status(200).json({ Success: true, Message: 'Timesheet Record updated Successfully.' });
        } else {
            return res.status(200).json({ Success: false, Message: 'Updation failed.' });
        }
        })
        }
    })
}
        catch (err) {
            dataconn.ARC_Errorlogger('homepageService', 'InsertConfirmStatus', err);
            res.status(200).json({ Success: false, Message: ' Confirmation table API failed.', Data: null });
        };


});

    return router;
};


module.exports = routes;