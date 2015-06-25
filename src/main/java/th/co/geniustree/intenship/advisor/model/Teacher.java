/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author User
 */
@Entity
public class Teacher implements Serializable{
    @Id
    private Integer id;
    private String name;
}
