-- Place your queries below

-- FS1

SELECT * FROM `students` WHERE `username`='dd'

UPDATE `students` SET `email`='4d4d4d' WHERE `Name`='dd'

INSERT INTO `students` SET `Name`='Mandy', `email`='greatemail@email.com', `password`=sha1('thisisagreatpassword'), `age`=12, `ID`='Mandy12'

DELETE FROM `students` WHERE `Name`='Mandy'

-- FS2

-- create 10 todo items
INSERT INTO `testdb`.`todo_items` (`id`, `timestamp`, `user_id`, `title`, `details`) VALUES ('1', '11', '111', 'a', 'a'), ('2', '22', '222', 'b', 'bb'), ('3', '33', '333', 'c', 'cc'), ('4', '44', '444', 'd', 'dd'), ('5', '55', '555', 'e', 'ee'), ('6', '66', '666', 'f', 'ff'), ('7', '77', '777', 'g', 'gg'), ('8', '88', '888', 'h', 'hh'), ('9', '99', '999', 'i', 'ii'), ('10', '1010', '101010', 'j', 'jj');

--Select all todo items made by 1 user of your choice
SELECT * FROM `todo_items` WHERE `user_id` = 333

--Insert a new todo item into the table by that same user
INSERT INTO `todo_items` SET `id`='33333', `timestamp`= 32123, `user_id` = 333, `title` = 'bongo', `details` = 'drums'

--Delete a todo item by that user
DELETE FROM `todo_items` WHERE `user_id`=333 AND `id`=3

--Update a todo item by that user with data of your choice
UPDATE `todo_items` SET `details`='rewrite' WHERE `user_id`=333

--Perform a select to get all information from `users` by using the user's id
SELECT * FROM `todo_items` WHERE `user_id`=333