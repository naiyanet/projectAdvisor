/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Student;
import th.co.geniustree.intenship.advisor.repo.StudentRepo;

/**
 *
 * @author User
 */
@RestController
public class StudentController {
    @Autowired
    private StudentRepo studentRepo;
    
    @RequestMapping (value = "/students",method = RequestMethod.GET)
    public Page<Student> getStudent(Pageable pageable){
        return studentRepo.findAll(pageable);
    }
    
    @RequestMapping (value = "/students",method = RequestMethod.POST)
    public void saveStudent(@Validated @RequestBody Student student){
        studentRepo.save(student);
    }
    @RequestMapping (value = "/studentss",method = RequestMethod.POST)
    public void deleteStudent(@RequestBody Student student){
        studentRepo.delete(student.getId());
    }
}
