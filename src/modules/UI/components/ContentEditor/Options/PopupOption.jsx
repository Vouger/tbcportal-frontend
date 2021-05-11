import React, {useEffect, useState,} from "react";
import PropTypes from "prop-types";

function PopupOption(props) {
    const { modalHandler, icon, submitAction, buttonDisabled } = props;
    const [expanded, setExpanded] = useState(false);

    const expandCollapse = () => {
        if (expanded) {
            setExpanded(false);
        }
    }

    const handleClick = () => {
        const success = submitAction();

        if (success) {
            setExpanded(false);
        }
    }

    useEffect(() => {
        modalHandler.registerCallBack(expandCollapse);

        return () => {
            modalHandler.deregisterCallBack(expandCollapse);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandCollapse])

    return (
        <div className='rdw-embedded-wrapper' aria-haspopup="true" aria-expanded={expanded}>
            <div className='rdw-option-wrapper' onClick={() => setExpanded(true)}>
                {icon}
            </div>

            {
                expanded
                    ? (
                        <div className="rdw-embedded-modal" onClick={(event) => event.stopPropagation()}>
                            {props.children}
                            <span className="rdw-embedded-modal-btn-section">
                                <button type="button" className="rdw-embedded-modal-btn" disabled={buttonDisabled} onClick={handleClick}>Add</button>
                                <button type="button" className="rdw-embedded-modal-btn" onClick={() => setExpanded(false)}>Cancel</button>
                            </span>
                        </div>
                    )
                    : undefined
            }

        </div>
    );
}

PopupOption.propTypes = {
    modalHandler: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
    submitAction: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool.isRequired
}

export default PopupOption;