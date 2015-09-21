/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 *
 * @author User
 */
@Entity
@Table(name = "CATEGORY_GROUP_COURSE")
public class CategoryGroupCourse implements Serializable{
    @Id
    @SequenceGenerator(name = "CATEGORYGROUPCOURSE", sequenceName = "CATEGORYGROUPCOURSE_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "CATEGORYGROUPCOURSE", strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    private String categotyGroupCourse;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategotyGroupCourse() {
        return categotyGroupCourse;
    }

    public void setCategotyGroupCourse(String categotyGroupCourse) {
        this.categotyGroupCourse = categotyGroupCourse;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final CategoryGroupCourse other = (CategoryGroupCourse) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }
    
    
    
}
