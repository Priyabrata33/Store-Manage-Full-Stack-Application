package com.app.demo.service;


import com.app.demo.models.Store;
import com.app.demo.models.StoreNameAdd;
import com.app.demo.repository.StoreRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoreService {
    @Autowired
    public StoreRepo storeRepository;

    public void insertStore(@RequestBody Store store){
       System.out.println("StoreService");
        storeRepository.save(store);
    }


    public List<Store> getStore(){
        List<Store> stores = storeRepository.findAll();

  // getting all the store name and the
 //       return stores.stream().map(e -> {
//            return new StoreNameAdd(e.getsName(),e.getsAddrs());
//        }).toList();
        return stores;
    }

    /*
    List to stream converrsion
    each element map

     */

}
