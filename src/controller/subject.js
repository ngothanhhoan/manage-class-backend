const { RESPONSE_CODE } = require("../constant");
const { db } = require("../service/db");
const {
  getAllSubject,
  createSubject,
  updateSubject,
  deleteSubject,
  getIdSubject,
} = require("../service/subject");

const getAllSubjectController = async (req, res) => {
  // const { user } = req;
  // console.log("user from controller", user);

  const listdata = await getAllSubject();
  const [rows, fields] = await db.promise().query("SELECT *FROM Subject");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all subject successful",
    data: listdata,
  });
};

const createSubjectController = async (req, res) => {
  const { id, name, classID, startTime, endTime } = req.body;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const results = await createSubject({
    id,
    name,
    classID,
    startTime,
    endTime,
  });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create subject successful",
    data: results,
  });
};

const deleteSubjectController = async (req, res) => {
  const { idDelete } = req.params;

  if (idDelete === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@idDelete can not be empty",
    });
  }

  const results = await deleteSubject({ idDelete });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete subject successful",
    data: results,
  });
};

const updateSubjectController = async (req, res) => {
  const { id, name, classID, startTime, endTime } = req.body;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const results = await updateSubject({
    id,
    name,
    classID,
    startTime,
    endTime,
  });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update subject successful",
    data: results,
  });
};

// const getAllSubjectClassController = async (req, res) => {
//   const { IDsubject } = req.params;

//   if (IDsubject === undefined) {
//     res.send({
//       code: RESPONSE_CODE.INVALID_BODY,
//       message: "@IDsubject can not be empty",
//     });
//   }
//   const listSubject = await getAllSubject();

//   res.send({
//     code: RESPONSE_CODE.SUCCESS,
//     message: "Get all student in subject successful",
//     data: listSubject,
//   });
// };

// const getIdSubjectController = async (req, res) => {
//   const results = await getIdSubject();
//   res.send({
//     code: RESPONSE_CODE.SUCCESS,
//     message: "Get list id subject successful",
//     data: results,
//   });
// };
module.exports = {
  getAllSubjectController,
  createSubjectController,
  deleteSubjectController,
  updateSubjectController,
  // getIdSubjectController,
  // getAllSubjectClassController,
};
