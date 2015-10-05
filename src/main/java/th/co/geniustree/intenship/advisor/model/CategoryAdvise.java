/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.validator.constraints.NotBlank;

/**
 *
 * @author User
 */
@Entity
@Table(name = "CATEGORYADVISE")
public class CategoryAdvise implements Serializable {

    @Id
    @SequenceGenerator(name = "CATEGORYADVISE", sequenceName = "CATEGORYADVISE_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "CATEGORYADVISE", strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String categoryName;
    
    @OneToMany(mappedBy = "categoryAdvise")
    private Advise advise;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Advise getAdvise() {
        return advise;
    }

    public void setAdvise(Advise advise) {
        this.advise = advise;
    }

    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 43 * hash + Objects.hashCode(this.id);
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
        final CategoryAdvise other = (CategoryAdvise) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
