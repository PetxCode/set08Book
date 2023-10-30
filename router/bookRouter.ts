import { Router } from "express";
import {
  createBook,
  deleteBook,
  readBookByCategory,
  readBookByID,
  readBooks,
  updateBook,
} from "../controller/bookController";

const router: Router = Router();

router.route("/create-book").post(createBook);
router.route("/read-books").get(readBooks);
router.route("/read-book-id/:bookID").get(readBookByID);
router.route("/read-book-category").get(readBookByCategory);
router.route("/update-book/:bookID").patch(updateBook);
router.route("/delete-book/:bookID").delete(deleteBook);

export default router;
