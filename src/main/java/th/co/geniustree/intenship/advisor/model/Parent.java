
package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 *
 * @author Account
 */
@Entity
public class Parent extends Account implements Serializable{
    private String relations;
    
    @ManyToMany
    private List<Authority> authorities;

    public String getRelations() {
        return relations;
    }

    public void setRelations(String relations) {
        this.relations = relations;
    }
    
}
