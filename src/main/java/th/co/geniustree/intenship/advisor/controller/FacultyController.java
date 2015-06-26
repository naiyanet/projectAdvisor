/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.repo.FacultyRepo;

/**
 *
 * @author User
 */
@RestController
public class FacultyController {
    @Autowired
    private FacultyRepo facultyRepo; 
}
