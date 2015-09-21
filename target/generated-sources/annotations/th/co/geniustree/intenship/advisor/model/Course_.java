package th.co.geniustree.intenship.advisor.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Course.class)
public abstract class Course_ {

	public static volatile SingularAttribute<Course, Date> date;
	public static volatile SingularAttribute<Course, String> file;
	public static volatile SingularAttribute<Course, Teacher> teacher;
	public static volatile SingularAttribute<Course, Student> student;
	public static volatile SingularAttribute<Course, String> idSubject;
	public static volatile SingularAttribute<Course, String> description;
	public static volatile SingularAttribute<Course, Integer> id;
	public static volatile SingularAttribute<Course, String> detail;
	public static volatile SingularAttribute<Course, String> title;

}

