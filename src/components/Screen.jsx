export const Screen = ({calculation}) => {
    return (
        <div className='screen'>
            {calculation && calculation !== '' ? calculation : 0}
        </div>
    );
}