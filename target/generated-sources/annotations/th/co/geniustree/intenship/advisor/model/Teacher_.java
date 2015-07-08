package th.co.geniustree.intenship.advisor.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Teacher.class)
public abstract class Teacher_ {

	public static volatile SingularAttribute<Teacher, String> password;
	public static volatile SingularAttribute<Teacher, String> address;
	public static volatile SingularAttribute<Teacher, Date> bDate;
	public static volatile SingularAttribute<Teacher, Integer> idTeacher;
	public static volatile SingularAttribute<Teacher, Integer> idCard;
	public static volatile SingularAttribute<Teacher, String> name;
	public static volatile SingularAttribute<Teacher, String> addressIDCard;
	public static volatile SingularAttribute<Teacher, String> mobile;
	public static volatile SingularAttribute<Teacher, Integer> id;
	public static volatile SingularAttribute<Teacher, String> email;
	public static volatile ListAttribute<Teacher, Authority> authorities;
	public static volatile SingularAttribute<Teacher, Faculty> faculty;

}

