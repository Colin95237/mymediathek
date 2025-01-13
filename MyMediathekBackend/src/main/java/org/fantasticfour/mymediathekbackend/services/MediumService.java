package org.fantasticfour.mymediathekbackend.services;

import org.fantasticfour.mymediathekbackend.entities.Medium;
import org.fantasticfour.mymediathekbackend.entities.Type;
import org.fantasticfour.mymediathekbackend.repositories.MediumRepository;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;

@Component
public class MediumService {

    public MediumRepository mediumRepository;

    public MediumService(MediumRepository mediumRepositoryinput){
        this.mediumRepository = mediumRepositoryinput;}

    public List<Medium> getallMedien(){
        return mediumRepository.findAll();}

    public Optional<Medium> getMediumById(Long ident){
        return mediumRepository.findById(ident);
    }

    public Medium createMedium(Medium newMedium){
        return mediumRepository.save(newMedium);
    }

    public void deleteById(Long ident){
        mediumRepository.deleteById(ident);
    }

    public Medium updateMedium(Medium newMedium){
        return mediumRepository.save(newMedium);
    }

    public List<Medium> getMediumByTypeId(Long id){
        return mediumRepository.findAllByTypeId(id);
    }
}
