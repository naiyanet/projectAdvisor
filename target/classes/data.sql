-- 

INSERT INTO department(name) values('programmer');
INSERT INTO department(name) values('IT');
INSERT INTO department(name) values('Network');
INSERT INTO department(name) values('Database');
-- 
INSERT INTO student(name,email,DEPARTMENT_ID) values('Best','Best',1);
INSERT INTO student(name,email,DEPARTMENT_ID) values('Best2','Best2',1);
INSERT INTO student(name,email,DEPARTMENT_ID) values('Best3','Best3',2);
INSERT INTO student(name,email,DEPARTMENT_ID) values('Best4','Best4',3);
INSERT INTO student(name,email,DEPARTMENT_ID) values('Best5','Best5',4);


INSERT INTO concact(name,relationshif,tel,student_id) values('Hello','mom','09876543219',4);
INSERT INTO concact(name,relationshif,tel,student_id) values('aaaa','mom','98789579663',2);
INSERT INTO concact(name,relationshif,tel,student_id) values('zzzz','mom','12345678901',3);
INSERT INTO concact(name,relationshif,tel,student_id) values('fffff','mom','46564786496',1);


INSERT INTO teacher(name,tel) values('JAVA','0123454321');
INSERT INTO teacher(name,tel) values('PHP','4275797424');
INSERT INTO teacher(name,tel) values('JAVASCRIPO','57575746466');
INSERT INTO teacher(name,tel) values('html','12345565677');

INSERT INTO teacherandstudent (teacher_id,students_id) values(1,1);
INSERT INTO teacherandstudent (teacher_id,students_id) values(1,3);
INSERT INTO teacherandstudent (teacher_id,students_id) values(1,4);
INSERT INTO teacherandstudent (teacher_id,students_id) values(2,1);
INSERT INTO teacherandstudent (teacher_id,students_id) values(2,2);
INSERT INTO teacherandstudent (teacher_id,students_id) values(3,4);
INSERT INTO teacherandstudent (teacher_id,students_id) values(3,3);
INSERT INTO teacherandstudent (teacher_id,students_id) values(4,4);
INSERT INTO teacherandstudent (teacher_id,students_id) values(4,3);