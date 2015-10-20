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
import th.co.geniustree.intenship.advisor.model.Account;
import th.co.geniustree.intenship.advisor.repo.AccountRepo;

/**
 *
 * @author Account
 */
@RestController
public class UserController {
    @Autowired
    private AccountRepo userRepo;
    
    @RequestMapping(value = "/getuser",method = RequestMethod.GET)
    public Page<Account> getUser(Pageable pageable){
        return userRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/saveuser",method = RequestMethod.POST)
    public void saveUser(@Validated @RequestBody Account user){
        userRepo.save(user);
    }
    
    @RequestMapping(value = "/deleteuser",method = RequestMethod.POST)
    public void deleteUser(@RequestBody Account user){
        userRepo.delete(user);
    }
    
    @RequestMapping(value = "/getaccout",method = RequestMethod.POST)
    public Page<Account> getAccount(@RequestBody String account , Pageable pagable){
        System.out.println("----------------------------------------------->account"+account);
        return userRepo.findByDtype(account,pagable);
    }
}
