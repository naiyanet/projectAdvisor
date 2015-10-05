package th.co.geniustree.intenship.advisor.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(CourseClass.class)
public abstract class CourseClass_ {

	public static volatile SingularAttribute<CourseClass, Integer> id;
	public static volatile SingularAttribute<CourseClass, StudentClassYear> studentClassYear;
	public static volatile SingularAttribute<CourseClass, String> credit;
	public static volatile SingularAttribute<CourseClass, String> subjectCode;
	public static volatile SingularAttribute<CourseClass, String> subjectName;

}

