# DropDown Menu

## how to install

    npm i @greypse/drop-down-menu --save

## how to use

1.  import ESmodule like this

        import { DropDown }  from '@greypse/drop-down-menu';

2.  create an options object to customize values and links using this format

        let options = {
            triggerName: 'Settings',
            contents: [
                { name: 'Account', link: '#' },
                { name: 'Notifications', link: '#' },
                { name: 'Log Out', link: '#' },
            ],
        };

3.  append it to the DOM

        document.body.appendChild(DropDown(options));
