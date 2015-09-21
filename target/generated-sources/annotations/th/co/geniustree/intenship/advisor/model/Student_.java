package th.co.geniustree.intenship.advisor.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Student.class)
public abstract class Student_ {

	public static volatile SingularAttribute<Student, Parent> parent;
	public static volatile SingularAttribute<Student, String> address;
	public static volatile SingularAttribute<Student, String> idCard;
	public static volatile SingularAttribute<Student, String> filePic;
	public static volatile SingularAttribute<Student, String> mobile;
	public static volatile ListAttribute<Student, Authority> authorities;
	public static volatile SingularAttribute<Student, Faculty> faculty;
	public static volatile SingularAttribute<Student, String> password;
	public static volatile SingularAttribute<Student, Teacher> teacher;
	public static volatile SingularAttribute<Student, Date> bDate;
	public static volatile SingularAttribute<Student, String> name;
	public static volatile SingularAttribute<Student, Integer> id;
	public static volatile SingularAttribute<Student, String> email;
	public static volatile SingularAttribute<Student, String> idStudent;
	public static volatile SingularAttribute<Student, Integer> age;

}

