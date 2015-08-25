package th.co.geniustree.intenship.advisor.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Parent.class)
public abstract class Parent_ {

	public static volatile SingularAttribute<Parent, String> password;
	public static volatile SingularAttribute<Parent, String> address;
	public static volatile SingularAttribute<Parent, Integer> idCard;
	public static volatile SingularAttribute<Parent, String> name;
	public static volatile SingularAttribute<Parent, String> mobile;
	public static volatile SingularAttribute<Parent, Integer> id;
	public static volatile SingularAttribute<Parent, String> relations;
	public static volatile SingularAttribute<Parent, String> email;
	public static volatile ListAttribute<Parent, Authority> authorities;
	public static volatile SingularAttribute<Parent, Integer> idParent;
	public static volatile SingularAttribute<Parent, Faculty> faculty;

}

