const User = require('../Model/User');

exports.register = async (req, res, next) => {
    try {
        const{name, email, password} = req.body;
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                sucess: false,
                message: 'Email already exists'
            });
        }

        user = await User.create({name, email, password, avatar: {public_id: 'sample_id', url: 'sampple_url'}
        });
        const token = await user.getJwtToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.status(201).cookie("token",token,options).json({
            sucess: true,
            message: 'User logged in successfully',
            user
        });
            
        } catch (error) {
        res.status(500).json({ 
            sucess: false,
            message: error.message 
        });
    }
};

exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email}).select('+password');

        if (!user) {
            return res.status(404).json({
                sucess: false,
                message: 'User not found'
            });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                sucess: false,
                message: 'Incorrect password'
            });
        }
        
        const token = await user.getJwtToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        res.status(201).cookie("token",token,options).json({
            sucess: true,
            message: 'User logged in successfully',
            user
        });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
};

exports.followUser = async (req, res, next) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const loggedInUser = await User.findById(req.user._id);

        if (!userToFollow) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }

        if (loggedInUser.following.includes(userToFollow._id)) {
            const indexfollowing = loggedInUser.following.indexOf(userToFollow._id);
            const indexfollowers = userToFollow.followers.indexOf(loggedInUser._id);

            loggedInUser.following.splice(indexfollowing,1);
            userToFollow.followers.splice(indexfollowers,1);

            await loggedInUser.save();
            await userToFollow.save();

            res.status(200).json({
                success: true,
                message: 'user unfollowed'
            });
            
        }else{
        loggedInUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedInUser._id);

        await loggedInUser.save();
        await userToFollow.save();
        res.status(200).json({
            success: true,
            message: 'User followed'
        })
    }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
};