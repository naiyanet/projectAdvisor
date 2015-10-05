package th.co.geniustree.intenship.advisor.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(CategoryCourse.class)
public abstract class CategoryCourse_ {

	public static volatile SingularAttribute<CategoryCourse, String> categoryCourseName;
	public static volatile ListAttribute<CategoryCourse, CategoryGroupCourse> categoryGroupCourse;
	public static volatile SingularAttribute<CategoryCourse, Course> course;
	public static volatile SingularAttribute<CategoryCourse, Integer> id;

}

