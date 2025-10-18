package dz.school.Managing.service.implementation;

import dz.school.Managing.repository.UtilisateurRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class implUserDetailsService implements UserDetailsService {
    private UtilisateurRepo utilisateurRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return utilisateurRepo.findByEmail(username).orElseThrow();
    }
}
