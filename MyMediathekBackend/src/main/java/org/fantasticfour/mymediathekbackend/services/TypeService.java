package org.fantasticfour.mymediathekbackend.services;

import org.fantasticfour.mymediathekbackend.entities.Type;
import org.fantasticfour.mymediathekbackend.repositories.TypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TypeService {

    public TypeRepository typeRepository;

    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    public List<Type> getAllTypes() {
       return typeRepository.findAll();
    }

    public Optional<Type> getTypeById(Long id){
       return typeRepository.findById(id);
    }

    public Type createType(Type type){
        return typeRepository.save(type);
    }

    public Type updateType(Type typeDetails){
        return typeRepository.save(typeDetails);
    }

    public void deleteType(Long id){
        typeRepository.deleteById(id);
    }
}
