package th.co.geniustree.intenship.advisor.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Appointment.class)
public abstract class Appointment_ {

	public static volatile SingularAttribute<Appointment, Date> date;
	public static volatile SingularAttribute<Appointment, String> topic;
	public static volatile SingularAttribute<Appointment, String> description;
	public static volatile SingularAttribute<Appointment, Integer> id;
	public static volatile SingularAttribute<Appointment, String> place;
	public static volatile ListAttribute<Appointment, Authority> authorities;

}

