
package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import java.util.Date;
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
@Table(name = "COURSE")
public class Course implements Serializable{
    @Id
    @SequenceGenerator(name = "COURSE",sequenceName = "COURSE_SEQ",allocationSize = 1)
    @GeneratedValue(generator = "COURSE",strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    private CategoryCourse categoryCourse;
    
    private CategoryGroupCourse categoryGroupCourse;
    
    private String subjectCode;
    private String subjectName;
    private String credit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public CategoryCourse getCategoryCourse() {
        return categoryCourse;
    }

    public void setCategoryCourse(CategoryCourse categoryCourse) {
        this.categoryCourse = categoryCourse;
    }

    public CategoryGroupCourse getCategoryGroupCourse() {
        return categoryGroupCourse;
    }

    public void setCategoryGroupCourse(CategoryGroupCourse categoryGroupCourse) {
        this.categoryGroupCourse = categoryGroupCourse;
    }

    public String getSubjectCode() {
        return subjectCode;
    }

    public void setSubjectCode(String subjectCode) {
        this.subjectCode = subjectCode;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getCredit() {
        return credit;
    }

    public void setCredit(String credit) {
        this.credit = credit;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 23 * hash + Objects.hashCode(this.id);
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
        final Course other = (Course) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }
    
    
}
