/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
/**
 *
 * @author User
 */
@Entity
@Table(name = "APPOINTMENT")
public class Appointment implements Serializable {
    @Id
    @SequenceGenerator(name = "APPOINTMENT", sequenceName = "APPOINTMENT_SEQ",allocationSize = 1)
    @GeneratedValue(generator = "APPOINTMENT",strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    @ManyToMany
    private List<Authority> authorities;
    
}
