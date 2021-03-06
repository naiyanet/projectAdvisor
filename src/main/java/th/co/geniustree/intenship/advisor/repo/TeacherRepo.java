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
import th.co.geniustree.intenship.advisor.model.Teacher;

/**
 *
 * @author User
 */
public interface TeacherRepo extends JpaRepository<Teacher, Integer>,JpaSpecificationExecutor<Teacher>{

    public Page<Teacher> findByNameOrEmail(String keyword, String keyword0, Pageable pageable);
    public Teacher findByName(String keyword);
    
}
