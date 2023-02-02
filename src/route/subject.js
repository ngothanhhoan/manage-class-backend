const express = require("express");
const {
  getAllSubjectController,
  createSubjectController,
  deleteSubjectController,
  // getIdSubjectController,
  updateSubjectController,
  // getAllSubjectClassController,
} = require("../controller/subject");

const subjectRouter = express.Router();

subjectRouter.get("/", getAllSubjectController);
subjectRouter.post("/", createSubjectController);
subjectRouter.put("/", updateSubjectController);
// classRouter.get("/listIdClass", getIdSubjectController);
// classRouter.get("/getSubject/:classID", getAllSubjectClassController);
subjectRouter.delete("/:idDelete", deleteSubjectController);

module.exports = subjectRouter;
