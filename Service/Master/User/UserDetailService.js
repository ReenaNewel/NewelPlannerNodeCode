var express = require('express');
var router = express.Router();
var connect = require('../../../Data/Connect');
var datamodel = require('../../../Data/DataModel');
var dataaccess = require('../../../Data/DataAccess');
var dataconn = require('../../../Data/DataConnection');
var commonfunc = require('../../../Common/CommonFunctions');

var routes = function () {

    router.route('/GetAllAssign')
        .get(function (req, res) {
            try {

            const UserMST = datamodel.tbl_master_userdetails();
            dataaccess.FindAll(UserMST)
        .then(function (result) {
            if (result != null) {
                res.status(200).json({ Success: true, Message: 'Get all Project Task Type successfully', Data: result });
            } else {
                // dataconn.errorlogger('GenaralMasterService', 'getProjectStatus', { message: 'No object found', stack: '' });
                res.status(200).json({ Success: false, Message: 'Error occurred while Getting record', Data: null });
            }
        }, function (err) {
            // dataconn.ARC_Errorlogger('GenaralMasterService', 'getProjectStatus', err);
            res.status(200).json({ Success: false, Message: ' Genaral Master table API failed.', Data: null });
        });
    }
    catch(err)    {
        res.status(200).json({ Success: false, Message: ' General Master table API failed.', Data: null });
    } 
})
   
         
            

return router;
};
module.exports = routes;