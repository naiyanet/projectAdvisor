package th.co.geniustree.intenship.advisor.model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Information.class)
public abstract class Information_ {

	public static volatile SingularAttribute<Information, String> file;
	public static volatile SingularAttribute<Information, String> linkWeb;
	public static volatile SingularAttribute<Information, String> description;
	public static volatile SingularAttribute<Information, Date> startTime;
	public static volatile SingularAttribute<Information, Integer> id;
	public static volatile SingularAttribute<Information, Date> endTime;
	public static volatile SingularAttribute<Information, String> title;
	public static volatile SingularAttribute<Information, String> pageBrief;

}

