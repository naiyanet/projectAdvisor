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
 * @author User
 */
@RestController
public class AccountController {
    @Autowired
    private AccountRepo accountRepo;
    
    @RequestMapping(value = "/account",method = RequestMethod.GET)
    public Page<Account> getAccount(Pageable pageable){
        return accountRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/account",method = RequestMethod.POST)
    public void saveAccount(@Validated @RequestBody Account account){
        accountRepo.save(account);
    }
    
    @RequestMapping(value = "/accounts",method = RequestMethod.POST)
    public void deleteAccount(Account account){
        accountRepo.delete(account.getId());
    }
}
