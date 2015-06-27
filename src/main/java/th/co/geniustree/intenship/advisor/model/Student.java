package th.co.geniustree.intenship.advisor.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

/**
 *
 * @author User
 */
@Entity
@Table(name = "STUDENT")
public class Student implements Serializable {

    @Id
    @SequenceGenerator(name = "student", sequenceName = "STUDENT_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "student", strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String password;
    
    @Column(name = "email" , nullable = false , unique = true)
    @NotBlank(message = "please input email")
    @Email(message = "format Incompatible (Ex. xxx@xxx.com)")
    private String email;
    @NotBlank(message = "please input ID Student")
    private Integer idStudent;
    @NotBlank(message = "please input ID Card")
    private Integer idCard;
    @NotBlank(message = "please input Your Name")
    private String name;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date bDate;
    private String sex;
    private String race;
    private String nationality;
    private String religion;
    private String bloodType;
    private String addressIDCard;
    private String address;
    @Column(name = "mobile" , nullable = false)
    @NotBlank(message = "please input mobile")
    private String phone;
    
    private boolean enabled = true;
    
    @ManyToOne
    @JoinColumn(name = "FACULTY_ID")
    private Faculty faculty;

    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    private Parent parent;

    @ManyToOne
    @JoinColumn(name = "TEACHER_ID")
    private Teacher teacher;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(Integer idStudent) {
        this.idStudent = idStudent;
    }

    public Integer getIdCard() {
        return idCard;
    }

    public void setIdCard(Integer idCard) {
        this.idCard = idCard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getbDate() {
        return bDate;
    }

    public void setbDate(Date bDate) {
        this.bDate = bDate;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getAddressIDCard() {
        return addressIDCard;
    }

    public void setAddressIDCard(String addressIDCard) {
        this.addressIDCard = addressIDCard;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.id);
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
        final Student other = (Student) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    

}
