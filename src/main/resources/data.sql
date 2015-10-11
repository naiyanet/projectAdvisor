
INSERT INTO ACCOUNT(ID,NAME,EMAIL,MOBILE,ADDRESS) 
        values(ACCOUNT_SEQ.nextVal,'somying','somyinggh@login.com','098888888','chonburi');

INSERT INTO ACCOUNT(ID,NAME,EMAIL,MOBILE,ADDRESS)
        values(ACCOUNT_SEQ.nextVal,'somchai','somchaigh@login.com','0988889999','bangkok');

INSERT INTO ACCOUNT(ID,NAME,EMAIL,MOBILE,ADDRESS) 
        values(ACCOUNT_SEQ.nextVal,'somruk','somruk@login.com','0988880000','bangkok');

INSERT INTO ACCOUNT(ID,NAME,EMAIL,MOBILE,ADDRESS)
        values(ACCOUNT_SEQ.nextVal,'naiyanet','naiyanet@login.com','0988880000','bangkok');

INSERT INTO FACULTY(ID,NAME) 
        values(FACULTY_SEQ.nextVal,'computer technology');

insert into category_course (id, category_course_name ) values(CATEGORYCOURSE_SEQ.nextVal,'หมวดศึกษาทั่วไป');
insert into category_course (id, category_course_name ) values(CATEGORYCOURSE_SEQ.nextVal,'หมวดวิชาเฉพาะ');
insert into category_course (id, category_course_name ) values(CATEGORYCOURSE_SEQ.nextVal,'หมวดวิชาเลือกเสรี');

insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาสังคมศาสตร์และมนุษย์ศาสตร์' , 1);
insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาภาษา',1);
insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์',1);
insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาพลศึกษาหรือนันทนาการหรือกิจกรรม',1);

insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาชีพพื้นฐาน',2);
insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาชีพบังคับ',2);
insert into CATEGORY_GROUP_COURSE (id, name , category_group_course ) values(CATEGORYGROUPCOURSE_SEQ.nextVal,'กลุ่มวิชาชีพเลือก',2);
