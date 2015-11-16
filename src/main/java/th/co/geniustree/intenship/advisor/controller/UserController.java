/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import javax.ws.rs.core.SecurityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Account;
import th.co.geniustree.intenship.advisor.model.SearchData;
import th.co.geniustree.intenship.advisor.repo.AccountRepo;
import th.co.geniustree.intenship.advisor.service.AccountSearchService;

/**
 *
 * @author Account
 */
@RestController
public class UserController {
    @Autowired
    private AccountRepo userRepo;
    
    @Autowired
    private AccountSearchService accountSearchService;
    
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
    
    @RequestMapping(value = "/getteacher",method = RequestMethod.POST)
    public Page<Account> getAccountTeacher(@RequestBody String account , Pageable pagable){
        System.out.println("----------------------------------------------->account"+account);
        return userRepo.findByDtype(account,pagable);
    }
    @RequestMapping(value = "/getparent",method = RequestMethod.POST)
    public Page<Account> getAccountParent(@RequestBody String account , Pageable pagable){
        System.out.println("----------------------------------------------->account"+account);
        return userRepo.findByDtype(account,pagable);
    }
    @RequestMapping(value = "/getstudent",method = RequestMethod.POST)
    public Page<Account> getAccountStudent(@RequestBody String account , Pageable pagable){
        System.out.println("----------------------------------------------->account"+account);
        return userRepo.findByDtype(account,pagable);
    }
     @RequestMapping(value = "/findteacher",method = RequestMethod.POST)
    public Page<Account> findTeacher (@RequestBody SearchData searchData , Pageable pageable){
        String SearchBy = searchData.getSearchBy();
        String keyword = searchData.getKeyWord();
        return userRepo.findByDtypeAndName(SearchBy, keyword, pageable);
    }
    
    @RequestMapping(value = "/startpageuser",method = RequestMethod.GET)
    public Account getCurrentLogin(){
        Account account =  (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Integer id = userRepo.findByEmail(account.getEmail()).get().getId();
        return userRepo.findOne(id);
    }
    
    @RequestMapping(value = "/getuser/searchuser",method = RequestMethod.POST)
    public Page<Account> searchUser (@RequestBody String keyword,Pageable pageable){
        return accountSearchService.searchAccount(keyword, pageable);
    }
   
}
