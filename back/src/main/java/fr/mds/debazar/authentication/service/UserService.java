package fr.mds.debazar.authentication.service;

import javax.transaction.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fr.mds.debazar.authentication.exception.MailExistsException;
import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.model.UserDTO;
import fr.mds.debazar.authentication.repository.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User registerNewUser(UserDTO userDto) throws MailExistsException {
        if (mailExist(userDto.getMailAddress())) {
            throw new MailExistsException("Un compte existe déjà avec ce mail." + userDto.getMailAddress());
        }
        return userRepository.save(createUser(userDto));
    }

    private User createUser(UserDTO userDto) {

        User newUser = new User();
        newUser.setFirstname(userDto.getFirstname());
        newUser.setLastname(userDto.getLastname());
        newUser.setMail_address(userDto.getMailAddress());
        newUser.setUsername(userDto.getUsername());
        newUser.setPassword(passwordEncoder.encode(userDto.getPassword()));
        newUser.setAddress(userDto.getAddress());
        newUser.setCity(userDto.getCity());
        newUser.setPhone(userDto.getPhone());
        newUser.setInterest(userDto.getInterest());
        newUser.setBanned(false);
        newUser.setVerified(false);

        return newUser;
    }

    private boolean mailExist(String mailAddress) {
        return userRepository.findByMailAddress(mailAddress) != null;
    }

    public void changePassword(final User user, final String password) {
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
    }
}
