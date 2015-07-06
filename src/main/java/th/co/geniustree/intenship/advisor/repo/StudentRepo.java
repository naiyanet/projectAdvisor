/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import th.co.geniustree.intenship.advisor.model.Student;

/**
 *
 * @author User
 */
public interface StudentRepo extends JpaRepository<Student, Integer>,JpaSpecificationExecutor<Student>{
    public Student findByEmail(String email);
    @Query("select u from Student u where u.name like %?1% or u.email like %?2%")
    public Page<Student> findByNameOrEmail(String name, String email, Pageable pageable);
    public Student findByEmailIgnoreCase(String value);

    public Object findByMobileIgnoreCase(String value);

    public Student findByIDCardIgnoreCase(String value);

    
}
