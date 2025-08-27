package dz.school.Managing.entity;

import dz.school.Managing.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AuthResponse {
    private String token;
    private boolean isAuthenticated;
    private String nom;
    private Long id;
    private Role role;
}
